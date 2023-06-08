import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const Video: React.FC<{ shown: boolean, url: string, title: string }> = ({shown, url, title}) => {
  console.log("debug: rendering with params: " + `${shown} ${url} ${title}`)
  return shown ?
    <div className={"video-container"} style={{
      flex:"auto",
      flexDirection:"column",
      flexGrow:1
    }}>
      <Card>
        <div className="card-cover" style={{
          minHeight:"160px",
          minWidth:"160px"
        }}>
          <video id="card-video" autoPlay={true} controls={false} muted={true} onPlay={() => {
            console.log("video autoplay")
          }}>
            <source src={url} type="video/mp4"/>
            您的浏览器不支持 HTML5 视频。
          </video>
        </div>
        <Meta
          title={title}
        />
      </Card>
    </div> : <div className={"video-container"}/>
}

export { Video }
