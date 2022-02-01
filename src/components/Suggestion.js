import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 20%;
`;

const Title = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Posters = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
`;

const Poster = styled.div`
    height: 380px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    border-radius: 7px;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center center;
`;

export default ({suggestions}) => (
    <Container>
        <Title>Suggestions</Title>
        <Posters>
            {suggestions?.map(s => (
                <Link key={s.id} to={`/${s.id}`}>
                    <Poster key={s.id} id={s.id} bg={s.medium_cover_image}/>
                </Link>
            ))}
        </Posters>
    </Container>
);