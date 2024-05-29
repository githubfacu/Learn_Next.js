import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';


describe('HomePage', () => {

    beforeEach(() => {
        render(<HomePage />)
    })

    test('que haya una lista', () => {
        const listaUl = screen.getByRole('list')
        expect(listaUl).toBeInTheDocument()

        const subTitle = screen.getByRole('heading', {level: 2})
        expect(subTitle).toBeInTheDocument()
        expect(subTitle).toHaveTextContent('The Article')

        const parrafo = screen.getByRole('paragraph')
        expect(parrafo).toBeInTheDocument()
        expect(parrafo).toHaveTextContent('Lorem ipsum')
    })


})