import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import LikeButton from './likeButton';


describe('LikeButton', () => {

    beforeEach(() => {
        render(<LikeButton />)
    })

    test('title', () => {
        const button = screen.getByRole('button')

        fireEvent.click(button)
        expect(button.textContent).toContain(1)

        fireEvent.click(button)
        fireEvent.click(button)
        fireEvent.click(button)
        expect(button.textContent).toContain(4)

    })
})