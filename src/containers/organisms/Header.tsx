type Props = {
  children:string;
}

export const Header = (props:Props) => {
  return (
    <>
    <header>
      <h2>{props.children}</h2>
    </header>
    </>
  )
};
