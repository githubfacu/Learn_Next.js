import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Article from './article';


describe('article', () => {


    const names = [
        'Luc Denil', 'Lara Marquez', 'Delma Luna'
    ]

    beforeEach(() => {
        render(<Article names={names} />)
    })

    test('que haya una lista', () => {
        const listaUl = screen.getByRole('list')
        expect(listaUl).toBeInTheDocument()

        const listaLi = screen.getByText('Luc Denil')
        expect(listaLi).toBeInTheDocument()

        const ulChildren = listaUl.children;
        expect(ulChildren.length).toEqual(3);
    })

    test('button visible', () => {
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

})