export const fetchAuthoredJournals = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/journals`
    })
);

export const fetchCategoryJournals = categoryId => (
    $.ajax({
        method: 'GET',
        url: `/api/categories/${categoryId}/journals`
    })
)


export const fetchAllJournals = () => (
    $.ajax({
        method: 'GET',
        url: `/api/journals`
    })
)


export const fetchJournal = (journalId) => (
    $.ajax({
        method: 'GET',
        url: `api/journals/${journalId}`
    })
);

export const createJournal = formData => (
    // $.ajax({
    //     method: 'POST',
    //     url: '/api/journals',
    //     data: {journal}
    // })
    $.ajax({
        url: "/api/journals",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
    })
)

export const updateJournal = journal => (
    $.ajax({
        method: 'PATCH',
        url:  `/api/journals/${journal.id}`,
        data: {journal}
    })

);

export const deleteJournal = journalId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/journals/${journalId}`
    })
);
