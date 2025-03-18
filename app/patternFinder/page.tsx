"use client"

import { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../../src/graphql/queries';
import { ListFabricToPatternsQueryVariables, WebFabricItems, WebPatternItems } from '@/src/API';
import '@aws-amplify/ui-react/styles.css';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ImageList, ImageListItem } from '@mui/material';

const client = generateClient({
  authMode: 'userPool',
});


export default function PatternFinderPage() {

  const [fabrics, setFabrics] = useState<WebFabricItems[]>([]);
  const [selectedFabric, setSelectedFabric] = useState("");
  const [patterns, setPatterns] = useState<WebPatternItems[]>([]);

  useEffect(() => {
    fetchWebFabricList();
  }, [])

  async function fetchWebFabricList() {
    try {
      const webFabricList = await client.graphql({ query: queries.listWebFabricItems })
      const data = webFabricList.data.listWebFabricItems.items;
      setFabrics(data);
    } catch (err) { console.log(err); }
  }

  async function fetchPatternsFromFabric(fabricId: string) {
    try {
      const fabricToPatternsVariables: ListFabricToPatternsQueryVariables = {
        filter: {
          webFabricItemsId: {
            eq: fabricId
          }
        }
      }
      const webToFabric = await client.graphql({ query: queries.listFabricToPatterns, variables: fabricToPatternsVariables })
      const data = webToFabric.data.listFabricToPatterns.items
      let filterMembers = data.map((item) => JSON.parse(`{"id":{"eq":"${item.webPatternItemsId}"}}`));
      let webPatternItemsVariables = { or: filterMembers };
      const patternVariables = {
        filter: webPatternItemsVariables
      }
      const fabricToWeb = await client.graphql({ query: queries.listWebPatternItems, variables: patternVariables })
      const result = fabricToWeb.data.listWebPatternItems.items
      setPatterns(result);

    } catch (err) { console.log(err); }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFabric(event.target.value);
    fetchPatternsFromFabric(event.target.value);
  };

  const images = (item: WebPatternItems) => {
    let itemData = item.imageUrl.split(",")
    return (
      <ImageList sx={{ width: "100%", height: "100%" }} cols={2} gap={10}>
        {itemData.map((element: string) => (
          <ImageListItem key={element}>
            <img src={element} loading="lazy"/>
          </ImageListItem>
        ))}
      </ImageList>
    )
  }

  return (
    <div>
      <Container sx={{ paddingTop: '50px' }}>
        <Paper sx={{ height: 'auto', width: 'auto' }} >
          <FormControl sx={{ marginTop: 1, minWidth: 150 }} fullWidth>
            <InputLabel>Fabrics</InputLabel>
            <Select onChange={handleChange} label="Manufactors" value={selectedFabric}>
              {fabrics.map((value) => (
                <MenuItem value={value.id} key={value.id}>{value.name}</MenuItem >
              ))}
            </Select></FormControl>
        </Paper>
        <div>
          {patterns.map((item) => (
            <div key={item.id}>
              {images(item)}
            </div>
          ))}
        </div>
      </Container>
    </div>)
}