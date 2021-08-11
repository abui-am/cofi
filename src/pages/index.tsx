import { NextPage } from 'next';
import { useState } from 'react';
import { Play } from 'react-bootstrap-icons';
import ReactPlayer from 'react-player';

import { RoundedButton } from '@/components/Button';
import { TextField } from '@/components/Field';

const Home: NextPage = () => {
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=keOFZ3cZvGQ');
  const [isPlaying, setPlaying] = useState(false);
  const [isPlaying2, setPlaying2] = useState(false);
  const [vol, setVol] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-900">
      <ReactPlayer url={url} controls playing={isPlaying} />
      <TextField onChange={(e) => setUrl(e.target.value)} />
      <RoundedButton onClick={() => setPlaying((v) => !v)}>
        <Play />
      </RoundedButton>

      <ReactPlayer
        volume={vol}
        loop
        width={0}
        height={0}
        url="/mix-kit/rain-thunder.wav"
        controls
        playing={isPlaying2}
      />
      <RoundedButton onClick={() => setPlaying2((v) => !v)}>
        <Play />
      </RoundedButton>
      <input type="range" onChange={(e) => setVol(Number.parseFloat(e.target.value) / 100)} />
    </div>
  );
};

export default Home;
