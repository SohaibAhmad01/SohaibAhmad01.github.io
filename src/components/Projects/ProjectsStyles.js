import styled from "styled-components";
import { motion } from "framer-motion";

export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  padding: 2rem 0;
  align-items: stretch;
  justify-items: stretch;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
