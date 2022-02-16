////////////// Before /////////////////////////// in provinces.service.ts

import { pipe } from "ramda";

async findProvince(inputName: string) {
    const province = await this.provinceRepository.findOne({
        where: {
            name: {
                [Op.iLike]: inputName.trim(),
            },
        },
    });
    if (!province) {
        throw new ForbiddenException(
            `Province with name ${inputName} not found`
        );
    }

    return createGqlProvinceFromEntity(province);
}


/////////////////////////////After             //////////////////////////////////////

async findProvince(inputName: string) {
    await pipe(this.provinceRepository.findOne, createGqlProvinceFromEntity)({
        where: {
            name: {
                [Op.iLike]: inputName.trim(),
            },
        },
    })
}
