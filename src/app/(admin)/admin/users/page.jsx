"use client"

import React from 'react'
import AdminLayout from '../../../../componentsAdmin/AdminLayout'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton } from '@mui/material';
import useSWR from 'swr';
import LoaderSpinner from '../../../../components/loader/LoaderSpinner';
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const AdmUsers = () => {

  const { data, error, isLoading } = useSWR('/api/user', fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <LoaderSpinner />


  const columns = [
    {
      field: '_id',
      headerName: 'User ID',
      width: 150,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 180,
    },

    {
      field: "Actions",
      width: 100,
      renderCell: (value) => (
        <Box style={{ width: "270px" }}>
          <a href={`/admin/user/edit/${value.row._id}`}>
            <IconButton aria-label="edit" >
              <MdModeEdit sx={{ color: '#1976d2' }} />
            </IconButton>
          </a>
          <IconButton aria-label="delete" >
              <MdDelete style={{ color: 'red' }} />
          </IconButton>
        </Box>
      )
    }
  ];

  const allUsers = data?.users?.length > 0 ? data?.users : [];

  return (
    <>
      <AdminLayout>
        <div>Adm Users</div>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button variant='contained' color="success" startIcon={<FaPlus />}><Link style={{ color: 'white', textDecoration: 'none' }} href='/admin/users/create'>Create User</Link> </Button>
        </Box>
        <Box sx={{ height: 450, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={allUsers}
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

export default AdmUsers