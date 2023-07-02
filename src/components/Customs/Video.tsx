import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const Video: React.FC<{
  shown: boolean;
  url: string;
  title: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
}> = ({
  shown,
  url,
  title,
  minHeight = '160px',
  minWidth = '160px',
  maxHeight = '50vh',
  maxWidth = '50vw',
}) => {
  console.log('debug: rendering with params: ' + `${shown} ${url} ${title}`);
  return shown ? (
    <Card>
      <div
        className="card-cover"
        style={
          {
            // minHeight: minHeight,
            // minWidth: minWidth,
            // maxHeight: maxHeight,
            // maxWidth: maxWidth,
          }
        }
      >
        <video
          id="card-video"
          autoPlay={true}
          controls={false}
          muted={true}
          onPlay={() => {
            console.log('video autoplay');
          }}
          style={{
            minHeight: minHeight,
            minWidth: minWidth,
            maxHeight: maxHeight,
            maxWidth: maxWidth,
          }}
        >
          <source src={url} type="video/mp4" />
          您的浏览器不支持 HTML5 视频。
        </video>
      </div>
      <Meta title={title} />
    </Card>
  ) : (
    <> </>
  );
};

export { Video };
