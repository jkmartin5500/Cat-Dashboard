import * as React from 'react';
import Dashboard from './Dashboard';
import { promises as fs } from 'fs';
import * as types from '../types';
import Papa from 'papaparse';

async function getData<T>(filename: string): Promise<T[]> {
  const csvData = await fs.readFile(process.cwd() + '/data/' + filename, 'utf8');

  const { data } = Papa.parse(csvData, {
    header: true,
    dynamicTyping: true,
  });

  return data as T[];
}

export default async function AsvCountPage() {
  var asvCount = await getData<types.AsvDataItem>("asv-count.csv");
  var totalCount = await getData<types.TotalDataItem>("total-count.csv");

  return (<Dashboard totalCountData={totalCount} asvCountData={asvCount}/>);
}
