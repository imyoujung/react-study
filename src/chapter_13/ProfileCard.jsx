import Card from "./Card";

function ProfileCard(props) {
  return (
    <Card title="유정이 카드" backgroundColor="pink">
      <p>안녕 난 유정임</p>
      <p>저는 리액트 초보입니다</p>
    </Card>
  );
}

export default ProfileCard;