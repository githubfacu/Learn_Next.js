import '@testing-library/jest-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import RutaPage, {metadata} from './page';


describe('RutaPage', () => {

    beforeEach(() => {
        render(<RutaPage />)
    })

    test('title', () => {
        const title = screen.getByText('RutaPage')
        expect(title).toBeInTheDocument()
    })

    test('metadata', () => {
        expect(metadata).toBeDefined();

        expect(metadata).toHaveProperty('title');
        expect(metadata.title).toEqual('Ruta');

        expect(metadata).toHaveProperty('description');
    })
})