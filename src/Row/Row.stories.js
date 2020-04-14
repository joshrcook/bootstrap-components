import React from 'react';
import Row from './index';
import Col from '../Col';
import Container from '../Container';
import { boolean, select } from "@storybook/addon-knobs";


export default {
    title: 'Row',
};

export const withOptions = () => {

    const colStyles = {
        border: '1px solid blue',
    };
    const colOptions = {
        default: null,
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6'
    };
    const noGutters = boolean('noGutters', false);
    const xs = select('xs', colOptions, null);
    const sm = select('sm', colOptions, null);
    const md = select('md', colOptions, null);
    const lg = select('lg', colOptions, null);
    const xl = select('xl', colOptions, null);
    return (
        <Container>
            <Row noGutters={noGutters} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <Col style={colStyles}>Col 1</Col>
                <Col style={colStyles}>Col 2</Col>
                <Col style={colStyles}>Col 3</Col>
                <Col style={colStyles}>Col 4</Col>
                <Col style={colStyles}>Col 5</Col>
                <Col style={colStyles}>Col 6</Col>
            </Row>
        </Container>
    )
}