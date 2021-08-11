import { NextPage } from 'next';
import { useState } from 'react';
import { Play } from 'react-bootstrap-icons';
import ReactPlayer from 'react-player';
import { Direction, Range } from 'react-range';

import { RoundedButton } from '@/components/Button';
import { TextField } from '@/components/Field';

const Home: NextPage = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=keOFZ3cZvGQ');
  const [isPlaying, setPlaying] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-900">
      <ReactPlayer url={url} controls playing={isPlaying} />
      <TextField onChange={(e) => setUrl(e.target.value)} />
      <RoundedButton onClick={() => setPlaying((v) => !v)}>
        <Play />
      </RoundedButton>
      <div className="absolute right-20 top-20">
        <PlayerVert />
      </div>
    </div>
  );
};

const PlayerVert = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [vol, setVol] = useState([0]);
  return (
    <div className="flex flex-col items-center">
      <ReactPlayer
        volume={vol / 100}
        loop
        width={0}
        height={0}
        url="/mix-kit/rain-thunder.wav"
        controls
        playing={isPlaying}
      />
      <RoundedButton onClick={() => setPlaying((v) => !v)}>
        <Play />
      </RoundedButton>
      <Range
        direction={Direction.Up}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '60px',
              width: 12,
              backgroundColor: '#c4c4c4',
              borderRadius: 200,
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '12px',
              width: '24px',
              background: '#FFFFFF',
              borderRadius: 10,
            }}
          />
        )}
        values={vol}
        onChange={(values) => setVol(values)}
      />
    </div>
  );
};

export default Home;
