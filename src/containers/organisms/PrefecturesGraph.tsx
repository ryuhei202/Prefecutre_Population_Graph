import { CheckBox, Props as CheckboxProps } from "../molucules/CheckBox";
import { Graph, Props as GraphProps } from "../molucules/Graph";

export type Props = {
  CheckboxProps: CheckboxProps,
  GraphProps: GraphProps
}

export const PrefecturesGraph = (props:Props) => {

  return (
    <>
    <div className="select-area">
      <CheckBox  {...props.CheckboxProps} />
      <Graph  {...props.GraphProps} />      
    </div>       
    </>
  )
};
