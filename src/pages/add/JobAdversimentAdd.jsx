import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from "yup"
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput'
import { Button, FormField, Input, FormGroup, TextArea, Segment, Header, Icon, Container } from 'semantic-ui-react'
import CityList from '../CityList'
import JobPositionList from '../JobPositionList'
import WorkingPositionList from '../WorkingPositionList'
import WorkingTimeList from '../WorkingTimeList'


export default function JobAdversimentAdd() {

    const initialValues = {
        companyName: "",
        jobPosition: "",
        workingTime: "",
        workingPosition: "",
        city: "",
        minSalary: "",
        maxSalary: "",
        applicationDeadline: "",
        jobDescription: "",

    }

    const schema = Yup.object({
        companyName: Yup.string().required("Company name required!"),
        jobPosition: Yup.string().required("Job position required!"),
        workingTime: Yup.string().required("Working time required!"),
        workingPosition: Yup.string().required("Working position required!"),
        minSalary: Yup.number().required("Minimum salary required!"),
        maxSalary: Yup.number().required("Maksimum salary required!"),
        city: Yup.string().required("City required!"),
        applicationDeadline: Yup.date().required("Application deadline required!"),
        jobDescription: Yup.string().required("Job description required!")
    })

    return (
        <div>
            <Container>
                <Header as='h2'>
                    <Icon name='announcement' />
                    <Header.Content>New Job Adversiment</Header.Content>
                </Header>

                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                >
                    <Segment color='teal'>
                        <Form className="ui form">
                            <FormField
                                id='companyName'
                                control={Input}
                                label='Company Name'
                                placeholder="Company Name"
                            />
                            <FormGroup widths='equal'>
                                <FormField
                                    id='minSalary'
                                    control={Input}
                                    label='Minimum Salary'
                                    placeholder="Minimum Salary"
                                />
                                <FormField
                                    id='maxSalary'
                                    control={Input}
                                    label='Maksimum Salary'
                                    placeholder="Maksimum Salary"
                                />

                            </FormGroup>

                            <FormGroup widths='equal'>
                                <FormField id='jobPosition' placeholder="Job Position"> <JobPositionList /> </FormField>
                                <FormField id='city' placeholder="City"> <CityList /> </FormField>
                                <FormField id='workingTime' placeholder="Working Time"> <WorkingTimeList /> </FormField>
                                <FormField id='workingPosition' placeholder="Working Position"> <WorkingPositionList /> </FormField>
                            </FormGroup>

                            <FormField
                                id='applicationDeadline'
                                control={Input}
                                type='date'
                                label='Application Deadline'
                                placeholder="Application Deadline"
                            />


                            <FormField
                                id='jobDescription'
                                control={TextArea}
                                label='Job Description'
                                placeholder="Job Description"
                            />



                            {/* <HrmsTextInput name="companyName" placeholder="Company Name" />
                <HrmsTextInput list='jobPosition' name="jobPosition" placeholder="Job Position" />
                <HrmsTextInput name="workingTime" placeholder="Working Time" />
                <HrmsTextInput name="workingPosition" placeholder="Working Position" />
                <HrmsTextInput name="minSalary" placeholder="Minimum Salary" />
                <HrmsTextInput name="maxSalary" placeholder="Maksimum Salary" />
                <HrmsTextInput name="city" placeholder="City"/>
                <HrmsTextInput name="applicationDeadline" placeholder="Application Deadline" />
                <HrmsTextInput name="jobDescription" placeholder="Job Description" /> */}

                            <Button color='teal' type="submit" fluid>Publish</Button>
                        </Form>


                    </Segment>

                </Formik >
            </Container>
        </div>
    )
}
