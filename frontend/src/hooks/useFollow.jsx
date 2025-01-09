import React from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useFollow = () => {
    const queryClient = useQueryClient();
    const { mutate: follow, isPending } = useMutation({
      mutationFn: async (userId) => {
        try {
          const res = await fetch(`/api/users/follow/${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.error || "Something went wrong");
          }
          return data;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
      onSuccess: (data) => {
        toast.success(data.message);
        Promise.allSettled([
          queryClient.invalidateQueries({ queryKey: ["users"] }),
          queryClient.invalidateQueries({ queryKey: ["authUser"] }),
        ]);
      },
      onError: () => {
        toast.error(error.message || "An error occurred. Please try again.");
      },
      
    });
    return { follow, isPending };
}

export default useFollow
