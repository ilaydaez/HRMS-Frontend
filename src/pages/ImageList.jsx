import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import ImageService from '../services/imageService'

export default function ImageList() {

    const [images, setImage] = useState([])

    useEffect(() => {
        let imageService = new ImageService()
        imageService.getImages().then(result => setImage(result.data.data))
    },[])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Image Id</Table.HeaderCell>
                        <Table.HeaderCell>Image Name</Table.HeaderCell>
                        <Table.HeaderCell>Image Url</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        images.map((image) => (
                            <Table.Row key={image.id}>
                                <Table.Cell>{image.imageId}</Table.Cell>
                                <Table.Cell>{image.name}</Table.Cell>
                                <Table.Cell>{image.imageUrl}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>

        </div>
    )
}
