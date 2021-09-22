import React from 'react'
import ReviewCard from '../ReviewCard'
import {render, screen} from '@testing-library/react'
describe('Review Card', () => {
    const testProps = {author: 'Sam', body: 'A long description', id:"123123123", published: new Date('2016-09-05T23:25:47.642350Z').toISOString, rating: 4.5}
    it('renders basic props', ()=>{
        render( <ReviewCard {...testProps}/>)
        expect(screen.getByText('4.5')).toBeInTheDocument();
        expect(screen.getByText('Sam')).toBeInTheDocument();
        expect(screen.getByText('A long description')).toBeInTheDocument();
    })
})