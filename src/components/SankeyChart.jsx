import { ResponsiveStream } from '@nivo/stream'

const MyStream = ({ data /* see data tab */ }) => (
    <ResponsiveStream /* or Stream for fixed dimensions */
        data={data}
        keys={['January', 'Feburary', 'March', 'April', 'May', 'June']}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        enableGridX={true}
        enableGridY={false}
        borderColor={{ theme: 'background' }}
        dotSize={8}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 20,
                symbolShape: 'circle'
            }
        ]}
    />
)

const data = [
  {
    "January": 109,
    "Feburary": 66,
    "March": 103,
    "April": 56,
    "May": 54,
    "June": 12
  },
  {
    "January": 89,
    "Feburary": 60,
    "March": 152,
    "April": 95,
    "May": 55,
    "June": 95
  },
  {
    "January": 127,
    "Feburary": 194,
    "March": 49,
    "April": 149,
    "May": 78,
    "June": 186
  },
  {
    "January": 147,
    "Feburary": 34,
    "March": 32,
    "April": 133,
    "May": 198,
    "June": 67
  },
  {
    "January": 35,
    "Feburary": 98,
    "March": 99,
    "April": 140,
    "May": 55,
    "June": 46
  },
  {
    "January": 196,
    "Feburary": 193,
    "March": 17,
    "April": 178,
    "May": 31,
    "June": 119
  },
  {
    "January": 178,
    "Feburary": 172,
    "March": 154,
    "April": 159,
    "May": 173,
    "June": 58
  },
  {
    "January": 71,
    "Feburary": 185,
    "March": 39,
    "April": 87,
    "May": 158,
    "June": 145
  },
  {
    "January": 59,
    "Feburary": 92,
    "March": 13,
    "April": 169,
    "May": 102,
    "June": 167
  }
]


export default function SankeyChart() {
    return(
      <div className="bg-white rounded-xl shadow-lg p-4 h-[300px] w-full">
        <MyStream data={data} />
      </div>
    );
}