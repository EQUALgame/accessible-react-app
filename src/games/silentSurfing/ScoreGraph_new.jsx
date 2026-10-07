import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Rectangle } from 'recharts';

function ScoreBarShape(props) {
  if (props.value !== 0) {
    return <Rectangle {...props} />;
  }

  const markerHeight = 3;
  return (
    <Rectangle
      {...props}
      y={props.y - markerHeight}
      height={markerHeight}
    />
  );
}

export default function ScoreChart({ data }) { // had to store separate to avoid build storage issues
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="Player" fill="#F95F62" shape={ScoreBarShape} />
        <Bar dataKey="Computer" fill="#5B9AC8" shape={ScoreBarShape} />
      </BarChart>
    </ResponsiveContainer>
  );
}
