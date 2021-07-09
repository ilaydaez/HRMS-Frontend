import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Form, FormField, FormGroup, Header, Input, Segment, TextArea, Button, Image, Rating } from 'semantic-ui-react'
import * as Yup from "yup"
import CreateCvService from '../../services/createCvService'
import SchoolList from '../SchoolList'
import DepartmentList from '../DepartmentList'
import FacultyList from '../FacultyList'
import ForeignLanguageList from '../ForeignLanguageList'
import { useParams } from 'react-router-dom'

export default function CvUpdateForm() {

    let { id } = useParams();

    const [cvId, setCv] = useState([])
    const [cvEmployee, setCvEmployee] = useState([])


    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getCvId(id).then(result => setCv(result.data.data))
    }, [])

    useEffect(() => {
        let createCvService = new CreateCvService()
        createCvService.getCvWithEmployeeCvId(id).then(result => setCvEmployee(result.data.data))
    }, [])

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
                                        defaultValue={cvEmployee.firstName}
                                        label='First Name'

                                    >
                                    </FormField>

                                    <FormField
                                        id='lastName'
                                        control={Input}
                                        defaultValue={cvEmployee.lastName}
                                        label='Last Name'
                                    />

                                    <FormField
                                        id='birthDate'
                                        control={Input}
                                        type='date'
                                        defaultValue={cvEmployee.birthDate}
                                        label='Birth Date'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='linkedin'
                                        control={Input}
                                        type='email'
                                        defaultValue={cvId.linkedin}
                                        label='Linkedin Adress'
                                    />

                                    <FormField
                                        id='github'
                                        control={Input}
                                        type='email'
                                        defaultValue={cvId.github}
                                        label='Github Adress'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='coverLetter'
                                        control={TextArea}
                                        defaultValue={cvId.coverLetter}
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
                                        defaultValue={cvId.companyName}
                                        label='Company Name'
                                    />

                                    <FormField
                                        id='jobStartDate'
                                        control={Input}
                                        type='date'
                                        defaultValue={cvId.jobStartDate}
                                        label='Start Date'
                                    />

                                    <FormField
                                        id='jobFinishDate'
                                        control={Input}
                                        type='date'
                                        defaultValue={cvId.jobFinishDate}
                                        label='Finish Date'
                                    />
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='jobDescription'
                                        control={TextArea}
                                        defaultValue={cvId.jobDescription}
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
                                        defaultValue={cvId.schools?.schoolName}
                                        label='School'
                                    >
                                        <SchoolList />
                                    </FormField>
                                    <FormField
                                        id='facultyName'
                                        control={Input}
                                        defaultValue={cvId.schools?.faculties?.facultyName}
                                        label='Faculty'>
                                        <FacultyList />
                                    </FormField>
                                    <FormField
                                        id='departmentName'
                                        control={Input}
                                        defaultValue={cvId.schools?.faculties?.departments?.departmentName}
                                        label='Department'>
                                        <DepartmentList />
                                    </FormField>
                                </FormGroup>

                                <FormGroup widths='equal'>
                                    <FormField
                                        id='schoolStartDate'
                                        control={Input}
                                        type='date'
                                        defaultValue={cvId.schoolStartDate}
                                        label='Start Date'
                                    />

                                    <FormField
                                        id='schoolFinishDate'
                                        control={Input}
                                        type='date'
                                        defaultValue={cvId.schoolFinishDate}
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
                                        defaultValue={cvId.foreignLanguages?.language}
                                        label='Language'
                                    >
                                        <ForeignLanguageList />
                                    </FormField>

                                    <FormField
                                        id='languageLevel'
                                        control={Input}
                                        label='Language Level'
                                    >
                                        <Rating icon='star' defaultRating={cvId.languageLevel} maxRating={5} />
                                    </FormField>
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
                                        defaultValue={cvId.programmings?.programName}
                                        label='Program Name'
                                    />
                                </FormGroup>
                            </Card>
                        </CardGroup>

                        <Card fluid raised>
                            <Button color='teal' type="submit" fluid>Update</Button>
                        </Card>

                    </Form>

                </Segment>

            </Formik>
        </div>
    )
}
