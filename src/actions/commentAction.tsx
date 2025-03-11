'use server'

export async function commentAction(state: { success: boolean; message: ( null | string) } | undefined, formdata: FormData) {
    try {
        const data = formdata.get("com");
        if(data==""){
            return { success: false, message: "Insert your comment" };
        }       
        return { success: true, message: "success" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return { success: false, message: "Failed to submit comment" };
    }
}
