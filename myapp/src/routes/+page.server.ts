import { supabase } from "$lib/supabaseClient";

export async function load() {
    const bucketName = 'Tech Icons';
    const { data: techImgFiles, error } = await supabase.storage.from(bucketName).list('');

    const publicUrls = techImgFiles?.map(file => {
        const {data: files} = supabase.storage.from(bucketName).getPublicUrl(file.name);
        return {
            name: file.name,
            publicUrl: files.publicUrl
        };
    });
    console.log(publicUrls);
    return { publicUrls };
}