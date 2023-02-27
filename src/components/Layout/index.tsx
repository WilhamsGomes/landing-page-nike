import { ReactNode } from "react";
import { Wrapper, Container, Content } from "@/styles/components/Layout/styles";
import Header from "../Header";

interface LayoutType {
    children: ReactNode;
}

export default function Layout({ children }: LayoutType) {
    return(
        <Wrapper>
            <Container>
                <Header />
                <Content>{children}</Content>
            </Container>
        </Wrapper>
        
    )
}