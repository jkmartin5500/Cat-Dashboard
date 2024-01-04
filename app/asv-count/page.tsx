"use client"

import * as React from 'react';
import Dashboard from './Dashboard';
import { promises as fs } from 'fs';
import * as types from '../types';
import Papa from 'papaparse';


export default function AsvCountPage() {
  const [csv, setCsv] = React.useState<any[]>([]);

  const fetchData = () => {
    fetch("https://d3kz3vqaeuvjdi.cloudfront.net/data/asv_counts.csv")
      .then(response => response.text())
      .then(data => {
        const parsedData = Papa.parse(data, { header: true }).data;
        setCsv(parsedData);
      })
      .catch(error => console.log(error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (<Dashboard asvCountData={csv}/>);
}
