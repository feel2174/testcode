import { useForm } from 'react-hook-form';
import React from 'react';
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';

const HookForm = (props: { name?: string }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(values);
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl style={{ display: 'flex', flexDirection: 'column', gap: '30px', margin: '50px 0px' }} isInvalid={errors.name}>
        <div>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            id="name"
            placeholder="name"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 3, message: 'Minimum length should be 4' },
            })}
          />
        </div>
        <div>
          <FormLabel htmlFor="name">{props.name}</FormLabel>
          <Input
            id="nickname"
            placeholder="nickname"
            {...register('nickname', {
              required: 'This is required',
              minLength: { value: 3, message: 'Minimum length should be 4' },
            })}
          />
        </div>
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default HookForm;
