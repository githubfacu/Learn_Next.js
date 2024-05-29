import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './header';


describe('header', () => {

    const titulo = 'algo'

    beforeEach(() => {

        render(<Header title={titulo}/>)
    })

    test('title', () => {
        const title = screen.getByRole('heading', {level: 1})
        expect(title).toBeInTheDocument()
        expect(title.textContent).toEqual(titulo)
    })
})