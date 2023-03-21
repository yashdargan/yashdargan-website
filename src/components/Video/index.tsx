import ReactPlayer from 'react-player';

const Video: React.FC = () => {
  return (
    <div className="my-16 flex flex-col gap-4">
      <div className="text-4xl font-bold">Latest Video</div>
      <div className="m-4 mx-auto w-full">
        <ReactPlayer width={'auto'} height={'20rem'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </div>
    </div>
  );
}

export default Video;
