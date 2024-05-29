import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DirectorioPage, {metadata} from './page';


describe('DirectorioPage', () => {

    beforeEach(() => {
        render(<DirectorioPage />)
    })

    test('title', () => {
        const title = screen.getByText('DirectorioPage')
        expect(title).toBeInTheDocument()
    })

    test('metadata', () => {
        expect(metadata).toBeDefined();

        expect(metadata).toHaveProperty('title');
        expect(metadata.title).toEqual('Directorio');

        expect(metadata).toHaveProperty('description');
    })
})