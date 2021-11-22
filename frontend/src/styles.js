export const style = (theme) => ({
    form: {
        display: 'flex',
        flexFlow: 'row',
        gap: '8px',
        padding: 24,
        [theme.breakpoints.down('sm')]: {
            padding: 12
        }
    }
})