import React from 'react'
import { useForm } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react'

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          placeholder="Enter your name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </FormControl>
      <FormControl isInvalid={errors.message}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          placeholder="Enter your message"
          {...register('message', { required: true })}
        />
        {errors.message && <span>This field is required</span>}
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal">
        Send
      </Button>
    </form>
  )
}

export default ContactForm
