import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from '../assets/data';
import { Legend } from '@headlessui/react';
export const Chart = () => {
    return (
        <ResponsiveContainer width={"100%"} height={500}>
            <BarChart
                width={150}
                height={40}
                data={chartData}>
                <XAxis dataKey={'name'} />
                <YAxis />
                       <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                dataKey='total' fill='#8884d8'/>
  </BarChart>
            </ResponsiveContainer>
  )
}
