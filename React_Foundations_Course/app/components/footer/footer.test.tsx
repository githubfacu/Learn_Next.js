import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './footer';


describe('footer', () => {

    beforeEach(() => {
        render(<Footer/>)
    })

    test('footer text', () => {
        const footerText = screen.getByText('Develop. Preview. Ship. Footer')
        expect(footerText).toBeInTheDocument()
    })

})