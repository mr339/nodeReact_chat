import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props: any) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="0df417c0-931b-4b26-949e-b24aaba79213"
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
