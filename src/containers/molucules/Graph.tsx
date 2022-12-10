import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PrefectureData } from "../../types";

type Props = {
  prefectureData: PrefectureData[]
}

export const Graph: React.FC<Props>= (props) => {
  const { prefectureData } = props;

  //seriesとcategoriesに取得したデータを渡す
  let series: Highcharts.SeriesOptionsType[] = [];
  let categories = [];

  for (let eachPre of prefectureData) {
    let data = [];

    for (let epd of eachPre.data) {
      data.push(epd.value);
      categories.push(String(epd.year));
    }

    series.push({
      type: "line",
      name: eachPre.prefName,
      data: data,
    });
  };

//グラフのオプションを指定
  const options: Highcharts.Options = {
   
    title: {
        text: '都道府県別総人口推移'
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },
    series: series
    
};

  return (
    <>
      <div className="graph-wrapper">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      
    </>
  )
};
