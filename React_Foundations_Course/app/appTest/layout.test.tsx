import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout, {metadata} from '../layout';

describe('RootLayout', () => {

    beforeEach(() => {
        render(<RootLayout children={undefined} />)
    })

    test('body', () => {
        const body = screen.getByRole('document')
        expect(body).toBeInTheDocument()
    })

    test('metadata', () => {
        expect(metadata).toBeDefined();

        expect(metadata).toHaveProperty('title');
        expect(metadata.title).toEqual('Next.js');

        expect(metadata).toHaveProperty('description');
    })
})