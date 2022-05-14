import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    //padding: 'auto',
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <Line {...config} />;
};

export default Page;
