import React from 'react';
import { Line } from '@ant-design/charts';

fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
  .then((res) => res.json())
  .then((data) => {
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond',
      },
    };
    return <Line {...config} />;
  });

const Page: React.FC = () => {
  const data = [
    {
      Date: '2010-01',
      value: 1998,
    },
    {
      Date: '2010-02',
      value: 1850,
    },
    {
      Date: '2010-03',
      value: 1720,
    },
    {
      Date: '2010-04',
      value: 1818,
    },
    {
      Date: '2010-05',
      value: 1920,
    },
    {
      Date: '2010-06',
      value: 1802,
    },
    {
      Date: '2010-07',
      value: 1945,
    },
    {
      Date: '2010-08',
      value: 1856,
    },
    {
      Date: '2010-09',
      value: 2107,
    },
    {
      Date: '2010-10',
      value: 2140,
    },
    {
      Date: '2010-11',
      value: 2311,
    },
    {
      Date: '2010-12',
      value: 1972,
    },
    {
      Date: '2011-01',
      value: 1760,
    },
    {
      Date: '2011-02',
      value: 1824,
    },
    {
      Date: '2011-03',
      value: 1801,
    },
    {
      Date: '2011-04',
      value: 2001,
    },
    {
      Date: '2011-05',
      value: 1640,
    },
    {
      Date: '2011-06',
      value: 1502,
    },
    {
      Date: '2011-07',
      value: 1621,
    },
    {
      Date: '2011-08',
      value: 1480,
    },
    {
      Date: '2011-09',
      value: 1549,
    },
    {
      Date: '2011-10',
      value: 1390,
    },
    {
      Date: '2011-11',
      value: 1325,
    },
    {
      Date: '2011-12',
      value: 1250,
    },
    {
      Date: '2012-01',
      value: 1394,
    },
    {
      Date: '2012-02',
      value: 1406,
    },
    {
      Date: '2012-03',
      value: 1578,
    },
    {
      Date: '2012-04',
      value: 1465,
    },
    {
      Date: '2012-05',
      value: 1689,
    },
    {
      Date: '2012-06',
      value: 1755,
    },
    {
      Date: '2012-07',
      value: 1495,
    },
    {
      Date: '2012-08',
      value: 1508,
    },
    {
      Date: '2012-09',
      value: 1433,
    },
    {
      Date: '2012-10',
      value: 1344,
    },
    {
      Date: '2012-11',
      value: 1201,
    },
    {
      Date: '2012-12',
      value: 1065,
    },
    {
      Date: '2013-01',
      value: 1255,
    },
    {
      Date: '2013-02',
      value: 1429,
    },
    {
      Date: '2013-03',
      value: 1398,
    },
    {
      Date: '2013-04',
      value: 1678,
    },
    {
      Date: '2013-05',
      value: 1524,
    },
    {
      Date: '2013-06',
      value: 1688,
    },
    {
      Date: '2013-07',
      value: 1500,
    },
    {
      Date: '2013-08',
      value: 1670,
    },
    {
      Date: '2013-09',
      value: 1734,
    },
    {
      Date: '2013-10',
      value: 1699,
    },
    {
      Date: '2013-11',
      value: 1508,
    },
    {
      Date: '2013-12',
      value: 1680,
    },
    {
      Date: '2014-01',
      value: 1750,
    },
    {
      Date: '2014-02',
      value: 1602,
    },
    {
      Date: '2014-03',
      value: 1834,
    },
    {
      Date: '2014-04',
      value: 1722,
    },
    {
      Date: '2014-05',
      value: 1430,
    },
    {
      Date: '2014-06',
      value: 1280,
    },
    {
      Date: '2014-07',
      value: 1367,
    },
    {
      Date: '2014-08',
      value: 1155,
    },
    {
      Date: '2014-09',
      value: 1289,
    },
    {
      Date: '2014-10',
      value: 1104,
    },
    {
      Date: '2014-11',
      value: 1246,
    },
    {
      Date: '2014-12',
      value: 1098,
    },
    {
      Date: '2015-01',
      value: 1189,
    },
    {
      Date: '2015-02',
      value: 1276,
    },
    {
      Date: '2015-03',
      value: 1033,
    },
    {
      Date: '2015-04',
      value: 956,
    },
    {
      Date: '2015-05',
      value: 845,
    },
    {
      Date: '2015-06',
      value: 1089,
    },
    {
      Date: '2015-07',
      value: 944,
    },
    {
      Date: '2015-08',
      value: 1043,
    },
    {
      Date: '2015-09',
      value: 893,
    },
    {
      Date: '2015-10',
      value: 840,
    },
    {
      Date: '2015-11',
      value: 934,
    },
    {
      Date: '2015-12',
      value: 810,
    },
    {
      Date: '2016-01',
      value: 782,
    },
    {
      Date: '2016-02',
      value: 1089,
    },
    {
      Date: '2016-03',
      value: 745,
    },
    {
      Date: '2016-04',
      value: 680,
    },
    {
      Date: '2016-05',
      value: 802,
    },
    {
      Date: '2016-06',
      value: 697,
    },
    {
      Date: '2016-07',
      value: 583,
    },
    {
      Date: '2016-08',
      value: 456,
    },
    {
      Date: '2016-09',
      value: 524,
    },
    {
      Date: '2016-10',
      value: 398,
    },
    {
      Date: '2016-11',
      value: 278,
    },
    {
      Date: '2016-12',
      value: 195,
    },
    {
      Date: '2017-01',
      value: 145,
    },
    {
      Date: '2017-02',
      value: 207,
    },
  ];
  const config = {
    data,
    height: 500,
    xField: 'Date',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Page;
