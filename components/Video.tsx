interface VideoProps extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
{
  sourceType?: string | undefined;
}

const basePath = process.env.BASE_PATH

const Video = ({ src, sourceType, ...rest }: VideoProps) => (
  <video
      width="100%"
      style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '0.25rem' }}
      autoPlay
      loop
      muted
      {...rest}
    >
      <source src={`${basePath || ''}${src}`} type={sourceType || "video/mp4"} />
    </video>
)

export default Video
