export default function ParentComponent() {
  return (
    <>
      <div>
        <h1>Hello Arjun from parent component</h1>
        <ChildComponenet name="Sohan" />
      </div>
    </>
  );
}

function ChildComponenet(props) {     // props passed to the child component : name or data accessed from the parent component
  return (
    <>
      <h2>Hello I'm {props.name} from child component</h2>
    </>
  );
}
