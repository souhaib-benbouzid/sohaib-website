import { darkPalette } from "../../ui/theme/palettes/dark";
import styled from "@emotion/styled";
import { lightPalette } from "../../ui/theme/palettes/light";

const Square = styled.div<{ background: string }>`
  width: 50px;
  height: 50px;
  background: ${({ background }) => background};
  margin: 5px;
`;

const Title = styled.div`
  text-transform: Capitalize;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const ColorBox = ({ background, title }) => {
  return (
    <Box>
      <Square background={background} />
      <Title>{title}</Title>
    </Box>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Viewer = ({ dark }) => {
  const { primary, secondary, success, error, warning } = dark
    ? darkPalette
    : lightPalette;
  const colors = [
    { title: "primary", color: (primary as any).main },
    { title: "secondary", color: (secondary as any).main },
    { title: "success", color: (success as any).main },
    { title: "error", color: (error as any).main },
    { title: "warning", color: (warning as any).main },
  ];

  return (
    <Container>
      {colors.map((item, index) => (
        <ColorBox background={item.color} title={item.title} key={index} />
      ))}
    </Container>
  );
};

export default {
  title: "Theme/Palette",
  component: Viewer,
};

const Template = (args) => <Viewer {...args} />;

export const Dark = Template.bind({});

Dark.args = {
  dark: true,
};

export const Light = Template.bind({});

Light.args = {
  dark: false,
};
