import { ResponsivePie } from '@nivo/pie'

const MyPie = ({ data /* see data tab */ }) => (
    <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
        colors={{ datum: 'data.color' }}
    />
);



const data = [
  {
    "id": "Borrowed",
    "label": "Borrowed",
    "value": 100,
    "color": "hsl(0, 91%, 71%)"
  },
  {
    "id": "Returned",
    "label": "Returned",
    "value": 500,
    "color": "hsl(152, 72%, 42%)"
  }
//   {
//     "id": "scala",
//     "label": "scala",
//     "value": 303,
//     "color": "hsl(242, 70%, 50%)"
//   },
//   {
//     "id": "go",
//     "label": "go",
//     "value": 398,
//     "color": "hsl(149, 70%, 50%)"
//   },
//   {
//     "id": "erlang",
//     "label": "erlang",
//     "value": 311,
//     "color": "hsl(34, 70%, 50%)"
//   }
]

export default function PieChart() {
    return (
        <div className="h-[400px] lg:w-[50%] w-full bg-white rounded-xl shadow-lg p-4">
            <MyPie data={data} />
        </div>
    )
}