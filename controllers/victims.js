const { prisma } = require("../prisma/prisma-client");

/**
 *
 * @route GET/api/victims/
 * @desc получение всех сотрудников
 * @acsess private
 */

const allVictims = async (req, res, next) => {
	try {
		const victims = await prisma.suiside.findMany();
		res.status(200).json(victims);
	} catch (error) {
		res.status(500).json({ message: "что-то пошло не так" });
	}
};
/**
 *
 * @route POST/api/victims/add/
 * @desc добавить сотрудника
 * @acsess private
 */

const addVictim = async (req, res, next) => {
	try {
		const data = req.body;
		if (!data.firstName || !data.lastName || !data.age || !data.reason) {
			return res.status(400).json({ message: "Заполните обязательное поле" });
		}
		const victim = await prisma.suiside.create({
			data: {
				...data,
				userId: req.user.id,
			},
		});

		return res.status(201).json(victim);
	} catch (error) {
		return res.status(500).json({ message: "что-то пошло не так" });
	}
};

/**
 *
 * @route POST/api/victims/remove/:id
 * @desc удалить сотрудника
 * @acsess private
 */

const removeVictim = async (req, res) => {
	const id = req.params.id;
	try {
		await prisma.suiside.delete({
			where: {
				id,
			},
		});
		res.status(204).json({ message: "deleted" });
	} catch (error) {
		return res.status(500).json({ message: "не удалось удалить сотрудника" });
	}
};
/**
 *
 * @route PUT/api/victims/edit/:id
 * @desc изменить сотрудника
 * @acsess private
 */
const editVictim = async (req, res) => {
	const data = req.body;
	const id = req.params.id;

	try {
		await prisma.suiside.update({
			where: {
				id,
			},
			data,
		});
		res.status(204).json({ message: "updated" });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "не удалость редактировать жертву" });
	}
};
/**
 *
 * @route GET/api/victims/:id
 * @desc  конкретный сотрудник
 * @acsess private
 */

const victim = async (req, res) => {
	const { id } = req.params;
	try {
		const victim = await prisma.suiside.findUnique({
			where: {
				id,
			},
		});
		res.status(200).json(victim);
	} catch (error) {
		return res.status(500).json({ message: "не удалость найти жертву" });
	}
};

module.exports = {
	allVictims,
	addVictim,
	removeVictim,
	editVictim,
	victim,
};
