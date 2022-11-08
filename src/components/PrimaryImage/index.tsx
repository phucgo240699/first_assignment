import styled from "styled-components";

interface Props {
  source: any;
  tintColor?: string;
}

const PrimaryImage : React.FC<Props> = ({ source, tintColor, ...otherProps }) => {
  return (
    <>
      {
        tintColor
        ? <TintColorLayer>
          <img src={source} {...otherProps} />
        </TintColorLayer>
        : <img src={source} {...otherProps} />
      }
    </>
  )
}

const TintColorLayer = styled.div<{ color?: string }>`
  background-color: ${p => p.color || 'transparent'};
`

export default PrimaryImage