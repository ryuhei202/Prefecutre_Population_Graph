
import { Header } from "../organisms/Header";
import { PrefecturesGraph } from "../organisms/PrefecturesGraph";

export const TopPage = () => {
  
  return (
    <>
      <Header>都道府県別総人口推移</Header>
      <PrefecturesGraph />
    </>
  )
};
