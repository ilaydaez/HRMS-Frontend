import { Formik } from 'formik'
import React from 'react'
import { Card, CardGroup, Form, FormField, FormGroup, Header, Icon, Input, Segment, TextArea, Button, Image } from 'semantic-ui-react'
import * as Yup from "yup"

export default function CreateCvAdd() {

    const initialValues = {
        firstName: '',
        lastName: '',
        birthDate: '',
        linkedin: '',
        github: '',
        coverLetter: '',
        city: '',
        companyName: '',
        jobDescription: '',
        jobStartDate: '',
        jobFinishDate: '',
        schoolName: '',
        facultyName: '',
        departmentName: '',
        schoolStartDate: '',
        schoolFinishDate: '',
        language: '',
        languageLevel: '',
        programName: '',

    }

    const schema = Yup.object({
        firstName: Yup.string().required("First name required!"),
        lastName: Yup.string().required("Last name required!"),
        birthDate: Yup.date().required("Birth date required!"),
        linkedin: Yup.string().required("Linkedin required!"),
        github: Yup.string().required("Github required!"),
        coverLetter: Yup.string().required("Cover letter required!"),
        city: Yup.string().required("City required!"),
        companyName: Yup.string().required("Company name required!"),
        jobDescription: Yup.string().required("Job description required!"),
        jobStartDate: Yup.date().required("Job start date required!"),
        jobFinishDate: Yup.date().required("Job finish date required!"),
        schoolName: Yup.string().required("School name required!"),
        facultyName: Yup.string().required("Faculty name required!"),
        departmentName: Yup.string().required("Department name required!"),
        schoolStartDate: Yup.date().required("Schol start date required!"),
        schoolFinishDate: Yup.date().required("School finish date required!"),
        language: Yup.string().required("Language required!"),
        languageLevel: Yup.number().required("Language level required!"),
        programName: Yup.string().required("Program name required!"),
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Segment color="teal">
                    <Form className="ui form">
                        <CardGroup>
                            <Image
                                centered
                                src={'https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-23-512.png'}
                                size='small'
                                circular verticalAlign='bottom'
                            />
                        </CardGroup>

                        <CardGroup>
                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Personal Information</Header.Content>
                            </Header>
                            <Card fluid raised>
                                <FormGroup widths='equal'>
                                    <FormField
                                        id='firstName'
                                        control={Input}
                                        label='First Name'
                                    />

                                    <FormField
                                        id='lastName'
                                        control={Input}
                                        label='Last Name'
                                    />

                                    <FormField
                                        id='birthDate'
                                        control={Input}
                                        type='date'
                                        label='Birth Date'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='linkedin'
                                        control={Input}
                                        type='email'
                                        label='Linkedin Adress'
                                    />

                                    <FormField
                                        id='github'
                                        control={Input}
                                        type='email'
                                        label='Github Adress'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='coverLetter'
                                        control={TextArea}
                                        label='Cover Letter'
                                    />
                                </FormGroup>
                            </Card>

                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Work Experiences</Header.Content>
                            </Header>

                            <Card fluid raised>
                                <FormGroup widths='equal'>
                                    <FormField
                                        id='companyName'
                                        control={Input}
                                        label='Company Name'
                                    />

                                    <FormField
                                        id='jobStartDate'
                                        control={Input}
                                        type='date'
                                        label='Start Date'
                                    />

                                    <FormField
                                        id='jobFinishDate'
                                        control={Input}
                                        type='date'
                                        label='Finish Date'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='jobDescription'
                                        control={TextArea}
                                        label='Job Description'
                                    />

                                </FormGroup>
                            </Card>

                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Education Information</Header.Content>
                            </Header>

                            <Card fluid raised>
                                <FormGroup widths='equal'>
                                    <FormField
                                        id='schoolName'
                                        control={Input}
                                        label='School Name'
                                    />

                                    <FormField
                                        id='facultyName'
                                        control={Input}
                                        label='Faculty Name'
                                    />

                                    <FormField
                                        id='departmentName'
                                        control={Input}
                                        label='Department Name'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='schoolStartDate'
                                        control={Input}
                                        type='date'
                                        label='Start Date'
                                    />

                                    <FormField
                                        id='schoolFinishDate'
                                        control={Input}
                                        type='date'
                                        label='Finish Date'
                                    />

                                </FormGroup>
                            </Card>

                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Foreign Language</Header.Content>
                            </Header>

                            <Card fluid raised>
                                <FormGroup widths='equal'>
                                    <FormField
                                        id='language'
                                        control={Input}
                                        label='Languge'
                                    />

                                    <FormField
                                        id='languageLevel'
                                        control={Input}
                                        label='Language Level'
                                    />
                                </FormGroup>
                            </Card>

                            <Header size='medium' dividing textAlign='left' color='grey'>
                                <Header.Content>Computer Information</Header.Content>
                            </Header>

                            <Card fluid raised>
                                <FormGroup widths='equal'>
                                    <FormField
                                        id='programName'
                                        control={Input}
                                        label='Program Name'
                                    />
                                </FormGroup>
                            </Card>
                        </CardGroup>

                        <Card fluid raised>
                            <Button color='teal' type="submit" fluid>Add</Button>
                        </Card>

                    </Form>

                </Segment>

            </Formik>
        </div>
    )
}