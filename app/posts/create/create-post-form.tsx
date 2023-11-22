'use client';

import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title must be at least 1 character long',
  }),
  content: z.string().min(1, {
    message: 'Content must be at least 1 character long',
  }),
});

const CreatePostForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/api/posts', values);

      form.reset();

      router.push('/posts');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto mt-8 max-w-md"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Title
        </label>
        <input
          {...form.register('title')}
          id="title"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        {form.formState.errors.title && (
          <div className="mt-2 text-red-500">
            {form.formState.errors.title.message}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="content"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Content
        </label>
        <input
          {...form.register('content')}
          id="content"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        {form.formState.errors.content && (
          <div className="mt-2 text-red-500">
            {form.formState.errors.content.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-blue-500 px-4 py-2 font-semibold text-white disabled:opacity-50"
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default CreatePostForm;
