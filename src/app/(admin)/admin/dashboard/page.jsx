'use client';
import React from 'react';
import AdminLayout from '../../../../componentsAdmin/AdminLayout';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton } from '@mui/material';
import LoaderSpinner from '../../../../components/loader/LoaderSpinner';
import useAllPosts from '../../../../hooks/useAllPosts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { mutate } from "swr";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";





const Dashboard = () => {

  const router = useRouter()
  const { data, isError, isLoading } = useAllPosts();
  if (isLoading) return <LoaderSpinner />

  //delete post
  const deletePost = async (postId) => {
      try {
          if (window.confirm(`You really want to delete post ID: "${postId}"`)) {
              const res = await fetch(`/api/post/${postId}`, {
                  method: "DELETE",
                  headers: {
                      Accept: 'application/json',
                      "Content-Type": 'application/json',
                  },
              });
              // Throw error with status code in case Fetch API req failed
              if (!res.ok) {
                  throw new Error('req failed');
              }

              const response = await res.json();
             // console.log('response', response)
              if (response?.success === true) toast.success('post deleted');
              //mutate(`/api/post/${postId}`, data, false); // Update the local data without a revalidation
              router.push("/admin/dashboard");
          }

      } catch (error) {
          console.log(error);
      }
  }

  const columns = [

      {
          field: '_id',
          headerName: 'Post ID',
          width: 150,
          editable: true,
      },
      {
          field: 'title',
          headerName: 'Post name',
          width: 150,
      },
      {
          field: 'url',
          headerName: 'Image',
          width: 150,
          renderCell: (values => (
              <img style={{ width: '80px', }} src={values.row.url} alt="" />
          ))
      },
      {
          field: "Actions",
          width: 100,
          renderCell: (value) => (
              <Box sx={{ maxWidth: "270px" }}>
                  <Link href={`/admin/post/${value.row._id}`}>
                      <IconButton aria-label="edit" >
                          <MdModeEdit sx={{ color: '#1976d2' }} />
                      </IconButton>
                  </Link>
                  <IconButton aria-label="delete"  >
                      <MdDelete style={{color: 'red'}} onClick={() => deletePost(value.row._id)}/>
                  </IconButton>

              </Box>
          )
      }
  ];

  const allPosts = data?.posts?.length > 0 ? data?.posts : [];


  return (
      <>
          <AdminLayout>
              <h1>Posts</h1>
              <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
                  <Button variant='contained' color="success" startIcon={<FaPlus />}><Link style={{ color: 'white', textDecoration: 'none' }} href='/admin/post/create'>Create Post</Link> </Button>
              </Box>
              <Box sx={{ height: 450, width: '100%' }}>
                  <DataGrid
                      getRowId={(row) => row._id}
                      rows={allPosts}
                      columns={columns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      checkboxSelection
                  />
              </Box>

          </AdminLayout>
      </>
  )
}

export default Dashboard